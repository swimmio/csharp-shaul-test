
using System.ComponentModel.DataAnnotations.Schema;

namespace RepositoryPattern.models
{
    [Table("treatment20231016085347202310121352521")]
    public class Treatment
    {
        [Column("treatment2023101608534720231012135252id202310091514002023100915080220231009150122")]
        public int Id { get; set; }
        [Column("treatment2023101608534720231012135252text")]
        public string Text { get; set; }
        [Column("price")]
        public int Price { get; set; }
    }
}