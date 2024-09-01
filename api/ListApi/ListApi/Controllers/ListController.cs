using ListApi.context;
using ListApi.models;
using Microsoft.AspNetCore.Mvc;

namespace ListApi.Controllers
{
    // Controlador do ListApi
    [ApiController]
    [Route("[controller]")]
    public class ListController : Controller
    {
        // Acesso a uma base de dados
        private readonly DBaseContext _context;

        public ListController(DBaseContext context)
        {
            _context = context;
        }


        // Obter uma tarefa pelo atributo Id
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

        // Criar uma nova tarefa
        [HttpPost]
        public IActionResult Create(Task_m task_add) 
        {
           _context.Add(task_add);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetId),new {id = task_add.Id}, task_add);
        }

        // Retorna todas as tarefas
        [HttpGet]
        public IActionResult Read() 
        {
            var alltasks = _context.Tasks_Db;
            return Ok(alltasks);
        }

        // Atualiza a tarefa específica pelo atributo id
        [HttpPut("{id}")]
        public IActionResult Update(int id, Task_m task) 
        {
            var taskupdate = _context.Tasks_Db.Find(id);

            taskupdate.NomeTarefa= task.NomeTarefa;
            taskupdate.DescricaoTarefa= task.DescricaoTarefa;
            taskupdate.Status = task.Status;
            
            _context.Tasks_Db.Update(taskupdate);
            _context.SaveChanges();
            return Ok();

        }

        // Faz a remoção da tarefa pelo atributo id
        [HttpDelete("{id}")]
        public IActionResult Delete(int id) 
        {
            var taskdelete = _context.Tasks_Db.Find(id);

            _context.Tasks_Db.Remove(taskdelete);
            _context.SaveChanges();
            return NoContent();
        }
    }
}
