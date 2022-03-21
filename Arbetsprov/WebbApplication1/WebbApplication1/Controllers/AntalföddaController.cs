using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using WebbApplication1.Models;
using Microsoft.AspNetCore.Hosting;
using System.IO;

namespace WebbApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AntalföddaController : Controller
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public AntalföddaController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                            select id,region,kön,år2016,år2017,år2018,år2019,år2020
                             from
                            dbo.Antalfödda";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("BefolkningAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }

        [HttpPost]
        public JsonResult Post(Antalfödda bef)
        {
            string query = @"
                           insert into dbo.Antalfödda
                           (id,region,kön,år2016,år2017,år2018,år2019,år2020)
                    values (@id,@region,@kön,@år2016,@år2017,@år2018,@år2019,@år2020)";
                            

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("BefolkningAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@id", bef.id);
                    myCommand.Parameters.AddWithValue("@region", bef.region);
                    myCommand.Parameters.AddWithValue("@kön", bef.kön);
                    myCommand.Parameters.AddWithValue("@år2016", bef.år2016);
                    myCommand.Parameters.AddWithValue("@år2017", bef.år2017);
                    myCommand.Parameters.AddWithValue("@år2018", bef.år2018);
                    myCommand.Parameters.AddWithValue("@år2019", bef.år2019);
                    myCommand.Parameters.AddWithValue("@år2020", bef.år2020);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Added Successfully");
        }

        [HttpPut]
        public JsonResult Put(Antalfödda bef)
        {
            string query = @"
                           update dbo.Antalfödda
                            set region= @region,
                            kön =@kön,
                            år2016=@år2016,
                            år2017=@år2017,
                            år2018=@år2018,
                            år2019=@år2019,
                            år2020=@år2020
                            where id =@id";
                                  


            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("BefolkningAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@id", bef.id);
                    myCommand.Parameters.AddWithValue("@region", bef.region);
                    myCommand.Parameters.AddWithValue("@kön", bef.kön);
                    myCommand.Parameters.AddWithValue("@år2016", bef.år2016);
                    myCommand.Parameters.AddWithValue("@år2017", bef.år2017);
                    myCommand.Parameters.AddWithValue("@år2018", bef.år2018);
                    myCommand.Parameters.AddWithValue("@år2019", bef.år2019);
                    myCommand.Parameters.AddWithValue("@år2020", bef.år2020);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Updated Successfully");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(float id)
        {
            string query = @"
                           delete from dbo.Antalfödda
                            where id=@id
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("BefolkningAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@id", id);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Deleted Successfully");
        }

        

       
    }
}