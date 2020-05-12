using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using RemainderBot.Core.Domain;
using RemainderBot.Core.DtoModels.NOSQL;

namespace RemainderBot.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotesController : ControllerBase
    {
        private readonly NotesProcessor processor;
        public NotesController(NotesProcessor notesProcessor)
        {
            processor = notesProcessor;
        }
        // GET: api/Notes
        [HttpGet]
        public IEnumerable<Notes> Get()
        {
            return processor.GetAllNotes();
        }

        // GET: api/Notes/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Notes
        [HttpPost]
        public ActionResult<bool> Post([FromBody] Notes value)
        {
            try
            {
                return Ok(processor.AddNotes(value));
            }
            catch (Exception ex)
            {

                throw ex;
            }
           
        }

        [HttpGet("Search")]
        public ActionResult<IEnumerable<Notes>> SearchNote([FromQuery] string searchKey)
        {
            try
            {
                return Ok(processor.SearchNote(searchKey));
            }
            catch (Exception ex)
            {

                throw ex;
            }

        }

        // PUT: api/Notes/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
