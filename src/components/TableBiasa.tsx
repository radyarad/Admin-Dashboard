import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    id: "ANN001",
    Status: "Read",
    Title: "Barang Baru",
  },
  {
    id: "ANN002",
    Status: "Read",
    Title: "Aturan Baru",
  },
  {
    id: "ANN003",
    Status: "Read",
    Title: "Kegiatan Baru",
  },
  {
    id: "ANN004",
    Status: "HalfRead",
    Title: "Laporan Bulanan",
  },
  {
    id: "ANN005",
    Status: "NotRead",
    Title: "Jadwal Rapat",
  },
  {
    id: "ANN006",
    Status: "HalfRead",
    Title: "Tempat Acara",
  },
  {
    id: "ANN007",
    Status: "NotRead",
    Title: "Acara tahun ini",
  },
  {
    id: "ANN008",
    Status: "Read",
    Title: "Barang Baru",
  },
  {
    id: "ANN009",
    Status: "Read",
    Title: "Aturan Baru",
  },
  {
    id: "ANN010",
    Status: "Read",
    Title: "Kegiatan Baru",
  },
  {
    id: "ANN011",
    Status: "HalfRead",
    Title: "Laporan Bulanan",
  },
  {
    id: "ANN012",
    Status: "NotRead",
    Title: "Jadwal Rapat",
  },
  {
    id: "ANN013",
    Status: "HalfRead",
    Title: "Tempat Acara",
  },
  {
    id: "ANN014",
    Status: "NotRead",
    Title: "Acara tahun ini",
  },
  {
    id: "ANN015",
    Status: "Read",
    Title: "Kegiatan Baru",
  },
  {
    id: "ANN016",
    Status: "HalfRead",
    Title: "Laporan Bulanan",
  },
  {
    id: "ANN017",
    Status: "NotRead",
    Title: "Jadwal Rapat",
  },
  {
    id: "ANN018",
    Status: "HalfRead",
    Title: "Tempat Acara",
  },
  {
    id: "ANN019",
    Status: "NotRead",
    Title: "Acara tahun ini",
  },
];

export function TableDemo() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Id</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Judul</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-medium">{invoice.id}</TableCell>
            <TableCell>{invoice.Status}</TableCell>
            <TableCell>{invoice.Title}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
