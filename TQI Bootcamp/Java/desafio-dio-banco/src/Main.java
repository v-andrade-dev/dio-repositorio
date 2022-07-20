public class Main {
    public static void main(String[] args) {
        Banco bancoPrincipal = new Banco();

        Cliente cliente1 = new Cliente("Vinicius de Andrade");
        Cliente cliente2 = new Cliente("Lewis Hamilton");
        Cliente cliente3 = new Cliente("Lionel Messi");

        Conta cc = new ContaCorrente(cliente1);
        Conta poupanca = new ContaPoupanca(cliente1);

        cc.depositar(500);
        cc.imprimirExtrato();
        poupanca.imprimirExtrato();

        System.out.println("Executando transferencia de 200 para poupança");
        cc.transferir(200, poupanca);

        System.out.println("Executando saque de 100 corrente");
        System.out.println("Executando saque de 50 poupanca");
        cc.sacar(100);
        poupanca.sacar(50);


        cc.imprimirExtrato();
        poupanca.imprimirExtrato();



    }
}
