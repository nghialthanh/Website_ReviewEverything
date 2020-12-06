using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Review.Controllers
{
    public class ReviewController : ApiController
    {
        [HttpGet]
        public List<Review> GetReviewLists()
        {
            TacPhamDataContext db = new TacPhamDataContext();
            return db.Reviews.ToList();
        }
        [HttpGet]
        public List<Review> GetReview(int id)
        {
            TacPhamDataContext db = new TacPhamDataContext();
            return db.Reviews.Where(x=>x.IDTP==id).ToList();
        }
        [HttpGet]
        [Route("api/byIdAcc")]
        public List<Review> GetReviewbyIDTP(int id)
        {
            TacPhamDataContext db = new TacPhamDataContext();
            return db.Reviews.Where(x => x.IDNV == id).ToList();
        }
        [HttpGet]
        [Route("api/nameAcc")]
        public string getname(int id)
        {
            TacPhamDataContext db = new TacPhamDataContext();
            return db.Accounts.Where(x => x.ID == id).FirstOrDefault().ToString();
        }
        [HttpDelete]
        public bool DeleteReview(int id)
        {
            TacPhamDataContext db = new TacPhamDataContext();
            //lấy Phim tồn tại ra
            Review Phim = db.Reviews.FirstOrDefault(x => x.ID == id);
            if (Phim == null) return false;
            db.Reviews.DeleteOnSubmit(Phim);
            db.SubmitChanges();
            return true;
        }
        [HttpPut]
        [Route("api/Review/up")]
        public bool Update(int id)
        {
            try
            {
                TacPhamDataContext db = new TacPhamDataContext();
                //lấy Phim tồn tại ra
                Review Phim = db.Reviews.FirstOrDefault(x => x.ID == id);
                if (Phim == null) return false;//không tồn tại false
                Phim.State = 1;
                db.SubmitChanges();//xác nhận chỉnh sửa
                return true;
            }
            catch
            {
                return false;
            }
        }
    }
}
