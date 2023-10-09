
using System.ComponentModel.DataAnnotations.Schema;

namespace RepositoryPattern.models
{
    [Table("treatment20231009160222")]
    public class Treatment
    {
        [Column("treatment20231009160222id202310091514002023100915080220231009150122")]
        public int Id { get; set; }
        [Column("treatment20231009160222text")]
        public string Text { get; set; }
        [Column("price")]
        public int Price { get; set; }
    }
}