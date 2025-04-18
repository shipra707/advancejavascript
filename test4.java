// create an interface calculator haveing the function add amd sub create two class which implements this and perform both the operations 
// Define the interface
interface Calculator {
    void add(int a, int b);
    void sub(int a, int b);
}


class SimpleCalculator implements Calculator {
    public void add(int a, int b) {
        System.out.println("SimpleCalculator Add: " + (a + b));
    }

    public void sub(int a, int b) {
        System.out.println("SimpleCalculator Sub: " + (a - b));
    }
}

class AdvancedCalculator implements Calculator {
    public void add(int a, int b) {
        int result = Math.addExact(a, b); 
        System.out.println("AdvancedCalculator Add: " + result);
    }

    public void sub(int a, int b) {
        int result = Math.subtractExact(a, b);
        System.out.println("AdvancedCalculator Sub: " + result);
    }
}


public class test4 {
    public static void main(String[] args) {
        Calculator simple = new SimpleCalculator();
        Calculator advanced = new AdvancedCalculator();

        System.out.println("Using SimpleCalculator:");
        simple.add(10, 5);
        simple.sub(10, 5);

        System.out.println("\nUsing AdvancedCalculator:");
        advanced.add(20, 10);
        advanced.sub(20, 10);
    }
}