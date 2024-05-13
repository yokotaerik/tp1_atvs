import prisma from "../prisma";

class ClienteService {
  async listarClientesMaisConsumidores() {
    const clientesMaisConsumidores = await prisma.$queryRaw`
      SELECT
        c.nome AS nome_cliente,
        COUNT(DISTINCT pc.id) AS total_produtos_consumidos,
        COUNT(DISTINCT sc.id) AS total_servicos_consumidos
      FROM
        Cliente c
      LEFT JOIN
        Produto pc ON c.id = pc.clienteId
      LEFT JOIN
        Servico sc ON c.id = sc.clienteId
      GROUP BY
        c.id
      ORDER BY
        (COUNT(DISTINCT pc.id) + COUNT(DISTINCT sc.id)) DESC
      LIMIT 10;
    `;

    return clientesMaisConsumidores;
  }

  async listarClientesMaisConsumiramEmValor() {
    const clientes = await prisma.$queryRaw`
      SELECT
        c.nome AS nome_cliente,
        SUM(p.valor) + COALESCE(SUM(s.valor), 0) AS total_gasto
      FROM
        Cliente c
      LEFT JOIN
        Produto p ON c.id = p.clienteId
      LEFT JOIN
        Servico s ON c.id = s.clienteId
      GROUP BY
        c.id
      ORDER BY
        total_gasto DESC
      LIMIT 5;
    `;

    return clientes;
  }

  async consumirProduto(clienteId: number, produtoId: number, qnt: number) {
    let produtoConsumidos: any = [];

    for (let i = 0; i < qnt; i++) {
      const produtoConsumido = await prisma.cliente.update({
        where: { id: clienteId },
        data: {
          produtosConsumidos: {
            connect: {
              id: produtoId,
            },
          },
        },
      });
      produtoConsumidos.push(produtoConsumido);
    }
    return produtoConsumidos;
  }

  async consumirServico(clienteId: number, servicoId: number) {
    const servicoConsumido = await prisma.cliente.update({
      where: { id: clienteId },
      data: {
        servicosConsumidos: {
          connect: {
            id: servicoId,
          },
        },
      },
    });
    return servicoConsumido;
  }
}

export default ClienteService;
