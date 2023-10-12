
using System.ComponentModel.DataAnnotations.Schema;

namespace RepositoryPattern.models
{
    [Table("treatment202310121233215")]
    public class Treatment
    {
        [Column("treatment20231012123321id")]
        public int Id { get; set; }
        [Column("treatment20231012123321")]
        public string Text { get; set; }
        [Column("price")]
        public int Price { get; set; }
    }
}