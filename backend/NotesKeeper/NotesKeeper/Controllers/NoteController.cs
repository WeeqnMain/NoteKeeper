using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NotesKeeper.Contracts;
using NotesKeeper.DataAccess;

namespace NotesKeeper.Controllers;

[ApiController]
[Route("[controller]")]
public class NoteController : ControllerBase
{
    private readonly NotesDbContext _dbContext;

    public NoteController(NotesDbContext dbContext)
    {
        _dbContext = dbContext;
    }
    
    [HttpDelete]
    public async Task<IActionResult> DeleteNote([FromQuery] DeleteNoteRequest request, CancellationToken ct)
    {
        Console.WriteLine($"Deleting note: {request.Id}");
        var note = await _dbContext.Notes.FirstAsync(note => note.Id.ToString() == request.Id, ct);
        _dbContext.Notes.Remove(note);
        await _dbContext.SaveChangesAsync(ct);
        return Ok(request.Id);
    }
}