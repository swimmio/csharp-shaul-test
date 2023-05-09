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
            var builder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("global.json");
            string conString = builder.Build().GetConnectionString("DefaultConnection");
            // I want to cherry pick this to the tag.

            MyContext myContext = MyContextFactory.Create(conString);
            TreatmentRepository tr = new TreatmentRepository(myContext);
            foreach (Treatment item in tr.GetAll())
            {
                Console.WriteLine(item.Text);
            }
            // Cherry pick this, with a squash commit
            Console.WriteLine(conString);
        }
    }
}