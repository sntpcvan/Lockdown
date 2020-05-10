using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Data.SqlClient;
using System.Text;

namespace CoreLibrary.Execution
{
    public class AppGlobal
    {
        public  readonly string ConnectionString;
        public readonly DbConnection DbConnection;
        public AppGlobal(IConfiguration configuration)
        {
            var connectionString = new SqlConnectionStringBuilder(
                configuration["CloudSql:ConnectionString"]);
            DbConnection =
               new SqlConnection(connectionString.ConnectionString);
            // [END cloud_sql_server_dotnet_ado_connection]
            
            ConnectionString = configuration.GetValue<string>("SQLConnString");
        }

        public Guid UserId { get => new Guid("26e364dd-58a0-43db-a65f-453de1333e04");  }
    }
}
