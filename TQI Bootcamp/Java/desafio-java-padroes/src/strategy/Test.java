package strategy;

public class Test{
    public static void main(String[] args) {
        ModoPadrao ataque = new ModoAtaque();
        ModoPadrao defensivo = new ModoDefesa();
        ModoPadrao amigo = new ModoAmigo();

        Robo robo1 = new Robo();
        Robo robo2 = new Robo();
        Robo robo3 = new Robo();

        System.out.println("Robo 1");

        robo1.setComportamento(amigo);
        robo1.mover();
        System.out.println("");

        System.out.println("Robo 2");
        robo2.setComportamento(ataque);
        robo2.mover();
        robo2.atacar();
        robo2.defender();
        System.out.println("");

        System.out.println("Robo 3");
        robo3.setComportamento(defensivo);
        robo3.mover();
        robo3.atacar();
        robo3.defender();

    }
}