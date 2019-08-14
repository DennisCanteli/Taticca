using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication2.Controllers
{
    public class ContatoController : Controller
    {
        // GET: Contato
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Curitiba() {
            return View();
        }

        public ActionResult Porto() {
            return View();
        }

        public ActionResult Blumenau() {
            return View();
        }

        public ActionResult Belo() {
            return View();
        }

        public ActionResult Brasilia() {
            return View();
        }

        public ActionResult Rio() {
            return View();
        }
    }
}