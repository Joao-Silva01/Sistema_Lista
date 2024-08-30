using ListApi.context;
using ListApi.models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ListApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ListController : Controller
    {
        private readonly DBaseContext _context;

        public ListController(DBaseContext context)
        {
            _context = context;
        }



        [HttpGet("{id}")]
        public IActionResult GetId(int id)
        {
            var SearchId = _context.Tasks_Db.Find(id);
            if (SearchId == null)
            {
                return NotFound();
            }
            return Ok(SearchId);
        }
        [HttpPost("Create")]
        public IActionResult Create(Task_m task_var) 
        {
           _context.Add(task_var);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetId),new {id = task_var.Id}, task_var);
        }


        [HttpGet("Read")]
        public IActionResult Read() 
        {
            var alltasks = _context.Tasks_Db;
            return Ok(alltasks);
        }


        [HttpPut("{id}")]
        public IActionResult Update(int id, Task_m task) 
        {
            var taskup = _context.Tasks_Db.Find(id);

            taskup.NomeTarefa= task.NomeTarefa;
            taskup.DescricaoTarefa= task.DescricaoTarefa;
            taskup.Status = task.Status;
            
            _context.Tasks_Db.Update(taskup);
            _context.SaveChanges();
            return Ok();

        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id) 
        {
            var taskdel = _context.Tasks_Db.Find(id);

            _context.Tasks_Db.Remove(taskdel);
            _context.SaveChanges();
            return NoContent();
        }
    }
}
