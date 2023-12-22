
using System.ComponentModel.DataAnnotations.Schema;

namespace RepositoryPattern.models
{
    [Table("treatment20231024182651")]
    public class Treatment
    {
        [Column("treatment20231024182651")]
        public int Id { get; set; }
        [Column("treatment20231024182651")]
        public string Text { get; set; }
        [Column("price")]
        public int Price { get; set; }
    }
}