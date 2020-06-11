package org.one230k;

import java.util.Map;

import com.google.cloud.language.v1.AnalyzeEntitiesRequest;
// Imports the Google Cloud client library
import com.google.cloud.language.v1.Document;
import com.google.cloud.language.v1.EncodingType;
import com.google.cloud.language.v1.Entity;
import com.google.cloud.language.v1.EntityMention;
import com.google.cloud.language.v1.Document.Type;
import com.google.cloud.language.v1.AnalyzeEntitiesResponse;
import com.google.cloud.language.v1.LanguageServiceClient;

public class QuickstartSample {
  public static void main(String... args) throws Exception {
    // Instantiates a client
    try (LanguageServiceClient language = LanguageServiceClient.create()) {

      // The text to analyze
      String text = "We the people have the right to government that works for all of us, over the long term, as opposed to "
          + "government ruled by greed for short-term profit at the expense of our health, our security, and our very "
          + "lives. The historical exploitation of all working people by the wealthy has gone unchecked by our "
          + "government for too long; this has harmed underrepresented, misrepresented, and disadvantaged "
          + "people the most. Income inequality is worse than ever before, with many corporate executives making "
          + "more than 600 times the pay of their lowest-paid employees. Wealth inequality is similarly extreme, "
          + "with the top 10% of families holding nearly 80% of America’s wealth and the bottom half only 1%. We "
          + "recognize just as President Franklin D. Roosevelt recognized nearly 90 years ago, that the natural "
          + "tendency of economic capital is to concentrate into fewer and fewer hands, to the point where the very "
          + "structure of society will collapse. It is therefore necessary to have in place governmental policies that "
          + "will counter this tendency towards collapse by ensuring that all people have the opportunity to share in "
          + "our nation's abundance.";

      Document doc = Document.newBuilder().setContent(text).setType(Type.PLAIN_TEXT).build();

      AnalyzeEntitiesRequest request = AnalyzeEntitiesRequest.newBuilder().setDocument(doc)
          .setEncodingType(EncodingType.UTF16).build();

      AnalyzeEntitiesResponse response = language.analyzeEntities(request);

      // Print the response
      for (Entity entity : response.getEntitiesList()) {
        System.out.printf("Entity: %s", entity.getName());
        System.out.printf("Salience: %.3f\n", entity.getSalience());
        System.out.println("Metadata: ");
        for (Map.Entry<String, String> entry : entity.getMetadataMap().entrySet()) {
          System.out.printf("%s : %s", entry.getKey(), entry.getValue());
        }
        for (EntityMention mention : entity.getMentionsList()) {
          System.out.printf("Begin offset: %d\n", mention.getText().getBeginOffset());
          System.out.printf("Content: %s\n", mention.getText().getContent());
          System.out.printf("Type: %s\n\n", mention.getType());
        }
      }
    }
  }
}
