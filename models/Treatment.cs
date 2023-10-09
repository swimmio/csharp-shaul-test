
using System.ComponentModel.DataAnnotations.Schema;

namespace RepositoryPattern.models
{
    [Table("treatment")]
    public class Treatment
    {
        [Column("treatmentid-d13d63fe-919f-49e9-acbf-453e845e5397")]
        public int Id { get; set; }
        [Column("treatmenttext")]
        public string Text { get; set; }
        [Column("price")]
        public int Price { get; set; }
    }
}