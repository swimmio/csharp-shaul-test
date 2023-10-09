
using System.ComponentModel.DataAnnotations.Schema;

namespace RepositoryPattern.models
{
    [Table("treatment20231009153709")]
    public class Treatment
    {
        [Column("treatment20231009153709id202310091514002023100915080220231009150122")]
        public int Id { get; set; }
        [Column("treatment20231009153709text")]
        public string Text { get; set; }
        [Column("price")]
        public int Price { get; set; }
    }
}