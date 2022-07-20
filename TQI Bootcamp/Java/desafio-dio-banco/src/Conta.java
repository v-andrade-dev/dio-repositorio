public class Conta {

    private static final int AGENCIA_PADRAO = 1;
    private static int SEQUENCIAL = 1;
    protected String tipo;
    protected int agencia;
    protected int numConta;
    protected double saldo;
    protected Cliente cliente;

    public Conta(Cliente cliente) {
        this.agencia = AGENCIA_PADRAO;
        this.numConta = SEQUENCIAL++;
        this.saldo = 0;
        this.cliente = cliente;
    }

    protected int getAgencia() {
        return agencia;
    }

    protected int getNumConta() {
        return numConta;
    }

    protected double getSaldo() {
        return saldo;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    protected void sacar(double valor){
        if(this.saldo>valor){
            this.saldo -= valor;
        }else{
            System.out.println("Saldo insuficiente");
        }
    }

    protected void depositar(double valor){
        this.saldo += valor;
    }

    protected void transferir(double valor, Conta contaDestino){
        if(this.saldo>valor){
            this.sacar(valor);
            contaDestino.depositar(valor);
        }else{
            System.out.println("Saldo insuficiente");
        }
    }

    protected void imprimirExtrato(){
        if(getTipo().equals("corrente")){
            System.out.println("=== EXTRATO CONTA CORRENTE ===");
        } else System.out.println("=== EXTRATO CONTA POUPANÇA ===");
        System.out.println("Titular: " + cliente.getNome());
        System.out.println("Ag: " + getAgencia());
        System.out.println("Conta: " + getNumConta());
        System.out.println("Saldo: " + getSaldo());
    }

}
