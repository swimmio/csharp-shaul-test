using System;

public class Functions1
{
    public int Add(int a, int b)
    {
        int result = a + b;
        Console.WriteLine("Addition Result: " + result);
        return result;
    }

    public int Subtract(int a, int b)
    {
        int result = a - b;
        Console.WriteLine("Subtraction Result: " + result);
        return result;
    }

    public void PrintMessage(string message)
    {
        Console.WriteLine("Printing message: " + message);
    }

    public void LongFunction1()
    {
        // 30 lines of code...
        Console.WriteLine("LongFunction1 executed.");
        // ...
        // ...
    }

    public void LongFunction2()
    {
        // 30 lines of code...
        Console.WriteLine("LongFunction2 executed.");
        // ...
        // ...
    }
}
