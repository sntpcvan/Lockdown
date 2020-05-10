using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Text;

namespace CoreLibrary.Execution
{
    public class AppGlobal
    {
        public  readonly string ConnectionString;
        public AppGlobal(IConfiguration configuration)
        {
            ConnectionString = configuration.GetValue<string>("SQLConnString");
        }

        public Guid UserId { get => new Guid("26e364dd-58a0-43db-a65f-453de1333e04");  }
    }
}
