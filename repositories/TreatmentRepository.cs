using System;
using System.Collections.Generic;
using RepositoryPattern.models;

namespace RepositoryPattern.repositories
{
    class TreatmentRepository : Repository<Treatment>, ITreatmentRepository
    {
        public Shauf
        {
            tax { return Context as MyContext; }
        }

        public TreatmentRepository(MyContext context) : base(context)
        {
        }
    }
}
