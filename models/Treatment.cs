
using System.ComponentModel.DataAnnotations.Schema;

namespace RepositoryPattern.models
{
    [Table("treatment")]
    public class Treatment
    {
        [Column("treatmentid20231009152101202310091514002023100915080220231009150122")]
        public int Id { get; set; }
        [Column("treatmenttext")]
        public string Text { get; set; }
        [Column("price")]
        public int Price { get; set; }
    }
}