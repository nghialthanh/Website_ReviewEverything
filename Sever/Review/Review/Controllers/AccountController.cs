using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Review.Controllers
{
    public class AccountController : ApiController
    {
        [HttpGet]
        public Account GetReview(string user,string pass)
        {
            TacPhamDataContext db = new TacPhamDataContext();
            Account p = db.Accounts.Where(x => (x.username.Equals(user) == true)&&(x.password.Equals(pass) == true)).FirstOrDefault();
            return p;
        }
        [HttpGet]
        public List<Account> GetReview()
        {
            TacPhamDataContext db = new TacPhamDataContext();
            return db.Accounts.ToList();
        }
        [HttpPost]
        public bool InsertNewAcc(Account h)
        {
            try
            {
                TacPhamDataContext db = new TacPhamDataContext();
                Account Phim = new Account();
                Phim.ID = h.ID;
                Phim.ID = h.ID;
                Phim.username = h.username;
                Phim.password = h.password;
                //Phim.Email = h.Email;
                Phim.chucvu = Phim.chucvu;
                db.Accounts.InsertOnSubmit(Phim);
                db.SubmitChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
    }
}
