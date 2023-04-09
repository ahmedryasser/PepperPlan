using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Sql;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using Microsoft.Data.Sqlite;


namespace PepperPlan.Models
{
    public class Context : DbContext
    {
        public DbSet<Class> Classes { get; set; }

        static Context()
        {
            Database.SetInitializer<DbContext>(null);
        }

        public Context()
            : base("Name=Context")
        {
        }
        //private Context(DbConnection databaseConnection) : base(databaseConnection, false)
        //{
        //}
    }
}