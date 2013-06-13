Imports System.Data.Entity

Namespace Person
    Public Class PersonController
        Inherits System.Web.Mvc.Controller

        Private db As New PersonEntities

        '
        ' GET: /Person/

        Function Index() As JsonResult
            Return Json(db.tblPersons.ToList(), JsonRequestBehavior.AllowGet)
        End Function

        '
        ' GET: /Person/Details/5

        Function Details(Optional ByVal id As Integer = Nothing) As ActionResult
            Dim tblperson As tblPerson = db.tblPersons.Find(id)
            If IsNothing(tblperson) Then
                Return HttpNotFound()
            End If
            Return View(tblperson)
        End Function

        '
        ' GET: /Person/Create

        Function Create() As ActionResult
            Return View()
        End Function

        '
        ' POST: /Person/Create

        <HttpPost()> _
        Function Create(ByVal tblPersons As List(Of tblPerson)) As JsonResult
            ' If ModelState.IsValid Then
            For Each p In tblPersons
                db.tblPersons.Add(p)
                db.SaveChanges()
            Next
            'End If
            Return Json(New With { _
                               .success = True, _
                               .rows = tblPersons.Count _
                            })
        End Function

        '
        ' GET: /Person/Edit/5

        Function Edit(Optional ByVal id As Integer = Nothing) As ActionResult
            Dim tblperson As tblPerson = db.tblPersons.Find(id)
            If IsNothing(tblperson) Then
                Return HttpNotFound()
            End If
            Return View(tblperson)
        End Function

        '
        ' POST: /Person/Edit/5

        <HttpPost()> _
        Function Edit(ByVal tblperson As tblPerson) As ActionResult
            If ModelState.IsValid Then
                db.Entry(tblperson).State = EntityState.Modified
                db.SaveChanges()
                Return RedirectToAction("Index")
            End If

            Return View(tblperson)
        End Function

        '
        ' GET: /Person/Delete/5

        Function Delete(Optional ByVal id As Integer = Nothing) As ActionResult
            Dim tblperson As tblPerson = db.tblPersons.Find(id)
            If IsNothing(tblperson) Then
                Return HttpNotFound()
            End If
            Return View(tblperson)
        End Function

        '
        ' POST: /Person/Delete/5

        <HttpPost()> _
        <ActionName("Delete")> _
        Function DeleteConfirmed(ByVal id As Integer) As RedirectToRouteResult
            Dim tblperson As tblPerson = db.tblPersons.Find(id)
            db.tblPersons.Remove(tblperson)
            db.SaveChanges()
            Return RedirectToAction("Index")
        End Function

        Protected Overrides Sub Dispose(ByVal disposing As Boolean)
            db.Dispose()
            MyBase.Dispose(disposing)
        End Sub

    End Class
End Namespace