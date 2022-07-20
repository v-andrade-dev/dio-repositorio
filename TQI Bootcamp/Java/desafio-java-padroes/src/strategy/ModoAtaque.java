package strategy;

public class ModoAtaque implements ModoPadrao {
    @Override
    public void mover() {
        System.out.println("Investida ao alvo");
    }

    public void atacar(){
        System.out.println("Atacando!");
    }

    @Override
    public void defender() {
        System.out.println("Esquiva");
    }
}
