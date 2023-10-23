
using System.ComponentModel.DataAnnotations.Schema;

namespace RepositoryPattern.models
{
    [Table("treatment20231023171639")]
    public class Treatment
    {
        [Column("treatment20231023171639")]
        public int Id { get; set; }
        [Column("treatment20231023171639")]
        public string Text { get; set; }
        [Column("price")]
        public int Price { get; set; }
    }
}