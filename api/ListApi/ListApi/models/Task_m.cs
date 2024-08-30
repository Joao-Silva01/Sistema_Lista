using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ListApi.models
{
    public class Task_m
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }


        public string NomeTarefa { get; set; }
        public string DescricaoTarefa { get; set; }
        public EnumTaskStatus Status { get; set;}
    }
}
