import UploadForm from "@/components/upload-form";
import { createClient } from "@/lib/supabase";

const Upload = async () => {
  const client = createClient();
  const { data } = await client
    .from("keys")
    .select("type,key")
    .eq("type", "pk");
  if (!data) return;
  const pk = data[0]["key"];

  return (
    <div className=" p-5 flex flex-col items-center  gap-2">
      <div className="text-3xl font-semibold">Upload Data</div>
      <UploadForm pk={pk} />
    </div>
  );
};

export default Upload;
