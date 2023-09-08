using System;
using System.Collections.Generic;

class User
{
    public string Name { get; set; }
    public string Email { get; set; }
}

class Program
{
    static void Main(string[] args)
    {
        List<User> users = new List<User>();

        while (true)
        {
            Console.WriteLine("Choose an option:");
            Console.WriteLine("1. Register a user");
            Console.WriteLine("2. List all users");
            Console.WriteLine("3. Exit");
            Console.Write("Enter your choice: ");

            if (int.TryParse(Console.ReadLine(), out int choice))
            {
                switch (choice)
                {
                    case 1:
                        RegisterUser(users);
                        break;
                    case 2:
                        ListUsers(users);
                        break;
                    case 3:
                        Environment.Exit(0);
                        break;
                    default:
                        Console.WriteLine("Invalid choice. Try again.");
                        break;
                }
            }
            else
            {
                Console.WriteLine("Invalid input. Please enter a valid number.");
            }
        }
    }

    static void RegisterUser(List<User> users)
    {
        User user = new User();

        Console.Write("Enter name: ");
        user.Name = Console.ReadLine();

        Console.Write("Enter email: ");
        user.Email = Console.ReadLine();

        users.Add(user);
        Console.WriteLine("User registered successfully.");
    }

    static void ListUsers(List<User> users)
    {
        Console.WriteLine("List of registered users:");
        foreach (var user in users)
        {
            Console.WriteLine($"Name: {user.Name}, Email: {user.Email}");
        }
    }
}
