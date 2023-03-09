// See https://aka.ms/new-console-template for more information

using System;

namespace CodeSample
{
    class HelloWorld
    {
        static void Main(string[] args)
        {
            // 10 is an interger
            // 10.5 is a decimal
            // 'c' is a single charater
            // "Friend" is a word of 6 charaters i.e string
        int A = 10; 
        int B = -50; 
        int C = 0; 
        int A1; // assigning value for variable after it has been declared.
        int B1; 
        A1 = 15; 
        B1 = -35; 
        int A2; 
        int B2; 
        A2 = 15; 
        B2 = A2; 
        int A3; 
        int B3; 
        A3 = 15;
        B3 = -A3;

        int num = 55;
        int num1 = 55;
        string name = "Nigel";
        Console.WriteLine("Hello, World!");
        Console.WriteLine(num);
        Console.WriteLine(name);
        Console.WriteLine(num + num1);
        Console.WriteLine(num * num1);
        Console.WriteLine(num / num1);
        Console.WriteLine(num - num1);
        Console.WriteLine(B2);
        Console.WriteLine(B3);
        Console.WriteLine("{0} {1}",B3, A3);
        }
    }
}