using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Review.Controllers
{
    public class TacPhamController : ApiController
    {
        [HttpGet]
        public List<Phim> GetPhimLists()
        {
            TacPhamDataContext db = new TacPhamDataContext();
            return db.Phims.ToList();
        }
        [HttpGet]
        public Phim GetPhim(int id)
        {
            TacPhamDataContext db = new TacPhamDataContext();
            return db.Phims.FirstOrDefault(x => x.ID == id);
        }
        [HttpPost]
        public bool InsertNewPhim(Phim h)
        {
            try
            {
                TacPhamDataContext db = new TacPhamDataContext();
                Phim Phim = new Phim();
                Phim.ID = h.ID;
                Phim.TenPhim = h.TenPhim;
                Phim.DaoDien = h.DaoDien;
                Phim.NgayCC = h.NgayCC;
                Phim.TheLoai = Phim.TheLoai;
                db.Phims.InsertOnSubmit(Phim);
                db.SubmitChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
        [HttpPut]
        [Route("api/Phim/up")]
        public bool UpdatePhim(Phim h)
        {
            try
            {
                TacPhamDataContext db = new TacPhamDataContext();
                //lấy Phim tồn tại ra
                Phim Phim = db.Phims.FirstOrDefault(x => x.ID == h.ID);
                if (Phim == null) return false;//không tồn tại false
                Phim.TenPhim = h.TenPhim;
                Phim.DaoDien = h.DaoDien;
                Phim.NgayCC = h.NgayCC;
                Phim.TheLoai = Phim.TheLoai;
                db.SubmitChanges();//xác nhận chỉnh sửa
                return true;
            }
            catch
            {
                return false;
            }
        }
        [HttpDelete]
        public bool DeletePhim(int id)
        {
            TacPhamDataContext db = new TacPhamDataContext();
            //lấy Phim tồn tại ra
            Phim Phim = db.Phims.FirstOrDefault(x => x.ID == id);
            if (Phim == null) return false;
            db.Phims.DeleteOnSubmit(Phim);
            db.SubmitChanges();
            return true;
        }
    }
}
