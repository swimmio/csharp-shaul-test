
using System.ComponentModel.DataAnnotations.Schema;

namespace RepositoryPattern.models
{
    [Table("treatment2023102316443320231016094405202310121352521")]
    public class Treatment
    {
        [Column("treatment202310231644332023101609440520231012135252id202310091514002023100915080220231009150122")]
        public int Id { get; set; }
        [Column("treatment202310231644332023101609440520231012135252text")]
        public string Text { get; set; }
        [Column("price")]
        public int Price { get; set; }
    }
}