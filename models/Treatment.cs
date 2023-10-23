
using System.ComponentModel.DataAnnotations.Schema;

namespace RepositoryPattern.models
{
    [Table("treatment20231023171913")]
    public class Treatment
    {
        [Column("treatment20231023171913")]
        public int Id { get; set; }
        [Column("treatment20231023171913")]
        public string Text { get; set; }
        [Column("price")]
        public int Price { get; set; }
    }
}