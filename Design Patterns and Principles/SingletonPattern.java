public class SingletonPattern {

    private static SingletonPattern instance;

    private SingletonPattern() {
        System.out.println("Singleton Instance Created");
    }

    public static SingletonPattern getInstance() {
        if (instance == null) {
            instance = new SingletonPattern();
        }
        return instance;
    }

    public void displayMessage() {
        System.out.println("Singleton Pattern Implemented Successfully");
    }

    public static void main(String[] args) {

        SingletonPattern obj1 = SingletonPattern.getInstance();
        obj1.displayMessage();

        SingletonPattern obj2 = SingletonPattern.getInstance();

        if (obj1 == obj2) {
            System.out.println("Both objects are the same instance.");
        }
    }
}