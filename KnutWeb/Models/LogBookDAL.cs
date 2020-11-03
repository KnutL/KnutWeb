using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KnutWeb.Models
{
    public class LogBookDAL
    {
        KnutWebContext db = new KnutWebContext();

        public IEnumerable<LogBook> GetAllLogBooks()
        {
            return db.LogBook.ToList();
        }

        public int CreateLogBook(LogBook log)
        {
            db.LogBook.Add(log);
            db.SaveChanges();
            return 1;
        }

        public int UpdateLogBook(LogBook log)
        {
            db.Entry(log).State = EntityState.Modified;
            db.SaveChanges();
            return 1;
        }

        public LogBook GetLogBookData(int id)
        {
            LogBook log = db.LogBook.Find(id);
            return log;
        }

        public int DeleteLogBook(int id)
        {
            LogBook log = db.LogBook.Find(id);
            db.LogBook.Remove(log);
            db.SaveChanges();
            return 1;
        }
    }
}
