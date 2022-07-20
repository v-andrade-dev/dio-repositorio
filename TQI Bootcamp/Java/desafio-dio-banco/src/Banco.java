import java.util.List;

public class Banco {
    private String nome;

    public void setClientes(List<Cliente> clientes) {
        this.clientes = clientes;
    }

    private List<Cliente>clientes;

    public List<Cliente> getClientes(){
        return clientes;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }


}


