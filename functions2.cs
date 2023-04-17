using System;

public class Functions2
{
    public void CallAddFunction()
    {
        Functions1 functions1 = new Functions1();
        int result = functions1.Add(5, 3);
        Console.WriteLine("CallAddFunction executed.");
    }

    public void CallPrintMessageFunction()
    {
        Functions1 functions1 = new Functions1();
        functions1.PrintMessage("Hello from Function1!");
        Console.WriteLine("CallPrintMessageFunction executed.");
    }

    public void LongFunction3()
    {
        Functions1 functions1 = new Functions1();
        // 30 lines of code...
        Console.WriteLine("LongFunction3 executed.");
        // ...
        // ...
    }

    public void CallLongFunction1()
    {
        Functions1 functions1 = new Functions1();
        functions1.LongFunction1();
        Console.WriteLine("CallLongFunction1 executed.");
    }
}
