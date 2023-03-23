using Antlr.Runtime;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PepperPlan.Controllers
{
    public class HomeController : Controller
    {
        MVCCRUDDB db = new MVCCRUDDB();
        public ActionResult Index()
        {
            var list = db.Classes.ToList();
            return View(list);
        }

        public ActionResult Create()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Create(Class _class)
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}