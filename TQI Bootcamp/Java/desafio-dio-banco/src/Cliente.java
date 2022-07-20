import java.util.ArrayList;
import java.util.List;

public class Cliente{
    private String nome;
    List<String> clientes = new ArrayList<>();

    public Cliente(String nome) {
        this.nome = nome;
        clientes.add(nome);
    }
    public String getNome() {
        return nome;
    }

}
