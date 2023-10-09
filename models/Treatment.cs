
using System.ComponentModel.DataAnnotations.Schema;

namespace RepositoryPattern.models
{
    [Table("treatment")]
    public class Treatment
    {
        [Column("treatmentid-6ead9928-514f-4296-92cf-e1a84fdd6c3c3")]
        public int Id { get; set; }
        [Column("treatmenttext")]
        public string Text { get; set; }
        [Column("price")]
        public int Price { get; set; }
    }
}