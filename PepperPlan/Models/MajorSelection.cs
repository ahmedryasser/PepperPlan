using System;
using System.Collections.Generic;
using System.Web.Mvc;
namespace PepperPlan.Models
{
	public class MajorSelection
	{
        //public MajorSelection()
        //{

        //}
        private SelectList _MajorSelectList { get; set; }

		public SelectList MajorSelectList
		{
			get
			{
				if(_MajorSelectList != null)
				{
					return _MajorSelectList;
					//returns list of Majors
				}
				return new SelectList(GetMajors(), "ID", "name");
			}

			set { _MajorSelectList = value; }
		}
        private List<MajorVM> GetMajors()
        {
            var majors = new List<MajorVM>()
            majors.Add(new MajorVM() { ID = 1, name = "Business" });
            majors.Add(new MajorVM() { ID = 2, name = "Computer Science" });
            return majors;
        }
    }
}

