{
    // Test the pattern
    var builder = new ConfigurationBuilder()
        .SetBasePath(Directory.GetCurrentDirectory())
        .AddJsonFile("global.json");
    string conString = builder.Build().GetConnectionString("DefaultConnection");

    MyContext myContext = MyContextFactory.Create(conString);
    Shaul shaul = new Shaul();
    shaul.test();
    TreatmentRepository tr = new TreatmentRepository(myContext);
    foreach (Treatment item in tr.GetAll())
    {
        Console.WriteLine(item.Text);
    }
    Console.WriteLine(conString);
}