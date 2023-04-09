using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services.Protocols;

namespace PepperPlan.Models
{
    public class Class
    {
        public string ClassName { get; set; }
        public string Name { get; set; }
        public string Prerequisites { get; set; }
        public string GeSatisfied { get; set; }
        public string MajorSatisfied { get; set; }
        public string MinorSatisfied { get; set;}
        public string Elective { get; set; }
        public int Units { get; set; }
        public string SemestersOffered { get; set; }
    }
}