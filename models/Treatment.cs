
using System.ComponentModel.DataAnnotations.Schema;

namespace RepositoryPattern.models
{
    [Table("treatment")]
    public class Treatment
    {
        [Column("treatmentid-0c6ab3a1-2e43-4046-a5d4-1b28e347e966")]
        public int Id { get; set; }
        [Column("treatmenttext")]
        public string Text { get; set; }
        [Column("price")]
        public int Price { get; set; }
    }
}