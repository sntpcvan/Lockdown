using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RemainderBot.Core.Migrations
{
    public partial class AlterMainContentStructure : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "MainContent",
                table: "Notes");

            migrationBuilder.AddColumn<DateTime>(
                name: "CreateDateTime",
                table: "Notes",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.CreateTable(
                name: "TextContent",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Data = table.Column<string>(nullable: true),
                    Attribute = table.Column<string>(nullable: true),
                    NotesId = table.Column<long>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TextContent", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TextContent_Notes_NotesId",
                        column: x => x.NotesId,
                        principalTable: "Notes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_TextContent_NotesId",
                table: "TextContent",
                column: "NotesId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TextContent");

            migrationBuilder.DropColumn(
                name: "CreateDateTime",
                table: "Notes");

            migrationBuilder.AddColumn<string>(
                name: "MainContent",
                table: "Notes",
                nullable: false,
                defaultValue: "");
        }
    }
}
