package strategy;

public class Robo {
    private ModoPadrao comportamento;

    public ModoPadrao getComportamento() {
        return comportamento;
    }

    public void setComportamento(ModoPadrao comportamento) {
        this.comportamento = comportamento;
    }

    public void mover(){
        comportamento.mover();
    }

    public void atacar(){
        comportamento.atacar();
    }

    public void defender(){
        comportamento.defender();
    }
}
