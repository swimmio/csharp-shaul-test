using System;
using System.IO;
using System.Data.SqlClient;
using System.Linq;
using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using RepositoryPattern.repositories;
using RepositoryPattern.models;

namespace RepositoryPattern
{
    class Program
    {
        static void Main(string[] args)
        {
            // Commit 1
            // Commit 2 - develop keeps going
            // Commit 3 - develop goes more
            // Commit 4 - develop goes more forward
            var builder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("global.json");
            string conString = builder.Build().GetConnectionString("DefaultConnection");

            MyContext myContext = MyContextFactory.Create(conString);
            TreatmentRepository tr = new TreatmentRepository(myContext);
            foreach (Treatment item in tr.GetAll())
            {
                Console.WriteLine(item.Text);
            }
            Console.WriteLine(conString);
        }
    }
}