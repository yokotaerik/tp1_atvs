import prisma from "../prisma";

export class ClienteService {
  async getAllClientes() {
    const clientes = await prisma.cliente.findMany({
      include: {
        cpf: true,
      },
    });
    return clientes;
  }

  async findClienteById(id: number) {
    const cliente = await prisma.cliente.findFirst({
      where: { id },
      include: {
        cpf: true,
        rgs: true,
        telefones: true,
        pets: true,
        produtosConsumidos: {
          include: {
            produto: true,
          },
        },
        servicosConsumidos: {
          include: {
            servico: true,
          },
        },
      },
    });
    return cliente;
  }

  async createCliente(
    nome: string,
    nomeSocial: string,
    cpf: string,
    cpfDataEmissao: string,
    rgs: any,
    telefones: any
  ) {
    const criacao = await prisma.$transaction(async (prisma) => {
      const cliente = await prisma.cliente.create({
        data: {
          nome,
          nomeSocial,
          dataCadastro: new Date(),
        },
      });

      await this.adicionarCPF(prisma, cliente.id, cpf, cpfDataEmissao);

      if (rgs.length > 0) {
        for (const rg of rgs) {
          await this.adicionarRG(prisma, cliente.id, rg.valor, rg.dataEmissao);
        }
      }

      if (telefones.length > 0) {
        for (const telefone of telefones) {
          await this.adicionarTelefone(
            prisma,
            cliente.id,
            telefone.ddd,
            telefone.numero
          );
        }
      }

      return cliente;
    });
  }

  async updateCliente(
    nome: string,
    nomeSocial: string,
    rgs: any,
    telefones: any,
    id: number
  ) {
    // Atualiza os dados básicos do cliente
    const clienteAtualizado = await prisma.cliente.update({
      where: { id },
      data: {
        nome,
        nomeSocial,
      },
    });

    // Remove todos os telefones antigos do cliente
    await prisma.cliente.update({
      where: { id },
      data: {
        telefones: {
          deleteMany: {},
        },
      },
    });

    // Adiciona os novos telefones
    for (const telefone of telefones) {
      await this.adicionarTelefone(prisma, id, telefone.ddd, telefone.numero);
    }

    // Adiciona os novos RGs
    for (const rg of rgs) {
      await this.adicionarRG(prisma, id, rg.valor, rg.dataEmissao);
    }
  }

  async deletarCliente(clienteId: number){
    await prisma.$transaction(async (prisma) => {
        await prisma.telefone.deleteMany({
            where: { clienteId },
        });

        await prisma.rG.deleteMany({
            where: { clienteId },
        });

        await prisma.cPF.deleteMany({
            where: { clienteId },
        });

        await prisma.clienteProduto.deleteMany({
            where: { clienteId },
        });

        await prisma.clienteServico.deleteMany({
            where: { clienteId },
        });

        await prisma.cliente.delete({
            where: { id: clienteId },
        });
    });
  }

  private async adicionarTelefone(
    prisma: any,
    clienteId: number,
    ddd: string,
    numero: string
  ) {
    try {
      const novoTelefone = await prisma.telefone.create({
        data: {
          ddd: ddd,
          numero: numero,
          cliente: { connect: { id: clienteId } },
        },
      });
      return novoTelefone;
    } catch (error) {
      throw error;
    }
  }

  private async adicionarRG(
    prisma: any,
    clienteId: number,
    valor: string,
    dataEmissao: string
  ) {
    try {
      // Converter a string de data para um objeto Date
      const dataEmissaoDate = new Date(dataEmissao);

      const novoRG = await prisma.rG.create({
        data: {
          dataEmissao: dataEmissaoDate, // Usar a data convertida
          valor,
          cliente: { connect: { id: clienteId } },
        },
      });
      return novoRG;
    } catch (error) {
      throw error;
    }
  }

  private async adicionarCPF(
    prisma: any,
    clienteId: number,
    valor: string,
    dataEmissao: string
  ) {
    try {
      // Converter a string de data para um objeto Date

      // a data chega 2024-02-01
      // pq o new Date não converte?

      console.log(dataEmissao);

      const dataEmissaoDate = new Date(dataEmissao);

      const novoCPF = await prisma.cPF.create({
        data: {
          valor,
          cliente: { connect: { id: clienteId } },
          dataEmissao: dataEmissaoDate, // Usar a data convertida
        },
      });
      return novoCPF;
    } catch (error) {
      throw error;
    }
  }

}
