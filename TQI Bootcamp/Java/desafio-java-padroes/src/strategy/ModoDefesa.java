package strategy;

public class ModoDefesa implements ModoPadrao{
    @Override
    public void mover() {
        System.out.println("Recuar!");
    }

    @Override
    public void atacar() {
        System.out.println("Contra-ataque!");
    }

    public void defender(){
        System.out.println("Usar escudo!");
    }
}
